
import { useEffect, useRef, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export type SelectedAddress = {
  placeId: string;
  address: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  latitude: number | null;
  longitude: number | null;
};

type Suggestion = {
  id: string;
  address: string;
};

type Props = {
  onSelect: (address: SelectedAddress | null) => void;
};

export default function GoogleAddressAutocomplete({
  onSelect,
}: Props) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState("");

  const requestId = useRef(0);

  useEffect(() => {
    const value = query.trim();

    if (value.length < 3 || selected === value) {
      setSuggestions([]);
      return;
    }

    const controller = new AbortController();
    const currentRequest = ++requestId.current;

    const timer = window.setTimeout(async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `${API_URL}/api/geocode?q=${encodeURIComponent(value)}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Neizdevās meklēt adresi.");
        }

        const data = await response.json();

        if (currentRequest === requestId.current) {
          setSuggestions(
            Array.isArray(data.results) ? data.results : []
          );
        }
      } catch (err) {
        if (
          err instanceof Error &&
          err.name !== "AbortError" &&
          currentRequest === requestId.current
        ) {
          setError(err.message);
        }
      } finally {
        if (
          !controller.signal.aborted &&
          currentRequest === requestId.current
        ) {
          setLoading(false);
        }
      }
    }, 300);

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [query, selected]);

  async function chooseSuggestion(item: Suggestion) {
    setQuery(item.address);
    setSelected(item.address);
    setSuggestions([]);
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${API_URL}/api/geocode/${encodeURIComponent(item.id)}`
      );

      if (!response.ok) {
        throw new Error("Neizdevās ielādēt adreses informāciju.");
      }

      const data = await response.json();

      if (!data.place) {
        throw new Error("Adreses informācija nav pieejama.");
      }

      onSelect(data.place as SelectedAddress);
    } catch (err) {
      setSelected("");
      onSelect(null);
      setError(
        err instanceof Error ? err.message : "Radās kļūda."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleChange(value: string) {
    setQuery(value);
    setSelected("");
    onSelect(null);
  }

  return (
    <div style={{ position: "relative", marginBottom: 16 }}>
      <label htmlFor="delivery-address">
        Piegādes adrese
      </label>

      <input
        id="delivery-address"
        type="text"
        value={query}
        onChange={(event) => handleChange(event.target.value)}
        placeholder="Ievadiet ielas adresi..."
        autoComplete="off"
        required
        style={{
          width: "100%",
          padding: 10,
          border: "1px solid #ccc",
          borderRadius: 6,
        }}
      />

      {loading && <p>Notiek meklēšana...</p>}
      {error && <p role="alert">{error}</p>}

      {suggestions.length > 0 && (
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            border: "1px solid #ddd",
            borderRadius: 6,
            background: "#fff",
            position: "absolute",
            zIndex: 1000,
            width: "100%",
            maxHeight: 220,
            overflowY: "auto",
          }}
        >
          {suggestions.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => chooseSuggestion(item)}
                style={{
                  display: "block",
                  width: "100%",
                  padding: 10,
                  border: 0,
                  background: "#fff",
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                {item.address}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
