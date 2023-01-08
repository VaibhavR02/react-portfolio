// import React from 'react';

// const Testimonial = () => {
//   return (
//     <div id="testimonial">
//       <h2>Testimonial</h2>
//       <section>
//         <TestimonialCard
//           name={'Vaibhav'}
//           feedback={
//             'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, error?'
//           }
//         />
//       </section>
//     </div>
//   );
// };

// const TestimonialCard = ({ name, feedback }) => (
//   <article>
//     <img
//       src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
//       alt="user"
//     />
//     <h4>{name}</h4>
//     <p>{feedback}</p>
//   </article>
// );

// export default Testimonial;

import React from 'react';

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={'Nikhil'}
          feedback={
            'You are very hardworking person,i hope you continue it for long.'
          }
        />

        <TestimonialCard
          name={'Kanchan'}
          feedback={'Good keep it up! you have a great future'}
        />

        <TestimonialCard
          name={'Bhagyashri'}
          feedback={
            'Your projects are  really amazing and codes are very structured'
          }
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
