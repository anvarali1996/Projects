// export function Home() {
//   return <h1>Home Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate illum harum ratione excepturi ipsa, nihil magnam, voluptates deleniti error nesciunt alias recusandae accusamus in suscipit. Illo quisquam minima quia ea? Culpa eligendi, nihil architecto vel nulla porro magni inventore mollitia provident optio ex reiciendis? Ab minus natus consequuntur minima non eos reprehenderit reiciendis quam sequi sit neque itaque, fugit, nam ipsa quia, soluta harum laboriosam voluptatibus est aliquid exercitationem consequatur quo cum! Dolore nulla rerum, sit aspernatur esse quo dignissimos, ad quaerat modi tempora sequi, debitis blanditiis nostrum ratione! Placeat qui iste doloremque ipsa, accusantium ipsum, quis ab possimus nisi a id est veniam atque, reiciendis omnis blanditiis repellendus corrupti repudiandae libero soluta alias. Nam modi quidem esse minima repellat voluptas animi, molestias velit accusamus quibusdam ratione voluptates error labore. Magni voluptatem saepe esse quidem impedit blanditiis, iure quia, commodi minus obcaecati maxime culpa, doloribus cum inventore nulla? Sequi, ipsam dolorum, a soluta odit quis iste ipsa, eaque ducimus quae quibusdam accusamus praesentium voluptate. Magnam itaque veritatis hic nihil pariatur eius rerum repellat aliquam, reiciendis facilis amet adipisci deserunt autem voluptates fuga corporis omnis vero optio delectus! Error expedita nesciunt pariatur deleniti quod dicta distinctio inventore voluptatem consectetur dolor, velit culpa minus enim beatae laboriosam maxime iure quas dolorem ea. Non ipsa obcaecati nobis saepe beatae, error et quo quisquam, commodi aliquam ab modi ea perspiciatis. Unde sunt, quas quis id eligendi minima iusto illo sit ullam praesentium libero dolor saepe rem magnam necessitatibus reiciendis alias optio quisquam commodi aut quaerat esse dolorem. Numquam sequi nam a? Corporis asperiores, excepturi quis, iste voluptates enim corrupti laboriosam ab hic explicabo aliquam sed. Temporibus perspiciatis similique odit eligendi tenetur, consequatur distinctio veritatis nisi ratione vero eum. Exercitationem quam non eligendi esse perferendis. Totam ipsa, illo sit recusandae repudiandae minus voluptate cum sint? Eum aperiam quidem inventore quod eligendi consequuntur temporibus consequatur itaque vero illo. Deleniti soluta nesciunt enim dolorum aut optio ducimus eos quibusdam hic adipisci laudantium aliquam maiores laboriosam nobis minus libero similique consequuntur odit, animi maxime tenetur? Aliquam officiis dolor atque quos error! Reprehenderit nihil voluptatem suscipit odit officiis magni sunt et, ducimus sequi, aspernatur tenetur amet in? Natus libero ratione dolorum! Animi doloribus id labore veritatis, maiores iste inventore eum ratione quisquam, tempore mollitia nam reiciendis nobis, ducimus temporibus repudiandae! Aliquam vel, amet consequatur magnam in accusantium aspernatur ab dicta nostrum voluptas eveniet repellendus labore unde quas dolorem dignissimos dolore tempora odit officia architecto doloremque assumenda perspiciatis voluptates? Nesciunt excepturi, architecto beatae rem reprehenderit nihil! Ab, eum facere unde fugit voluptatibus nulla temporibus ratione laborum ut repellat, ducimus fugiat nesciunt similique quaerat doloribus et, placeat commodi ipsa nam provident vero. Itaque nemo est in ad, veritatis dolorum ipsum illo quos nulla rerum adipisci cum obcaecati ex deserunt laudantium odit ducimus pariatur sapiente eum ullam iste. Explicabo cum architecto dolores reiciendis eum corporis at. Itaque libero reiciendis sit provident. Architecto, totam omnis minus commodi quo hic ex mollitia aspernatur ullam saepe illo error. Ipsa dolorum unde veniam nobis laboriosam iste?</h1>  
// } 
// import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <Container className="mt-5">
        <header className="text-center">
          <h1>Welcome to My Store</h1>
          <p className="lead">Your one-stop shop for all your needs</p>
         <Link className='text-decoration-none' to='/store'><h4> Start shopping</h4></Link> 
        </header>

        
      </Container>

    </>
  );
}
