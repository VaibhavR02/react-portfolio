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
          name={'Bhagyashri'}
          feedback={
            'Your projects are  really amazing and codes are very structured'
          }
        />
        <TestimonialCard
          name={'Shruti'}
          feedback={
            'Thats great! Keep working on it. I’m amazed by how well you do this. '
          }
        />
        <TestimonialCard
          name={'Sachin'}
          feedback={
            'The work you’ve put into this project is very high level. Keep up the good work!. And all the best buddy '
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
