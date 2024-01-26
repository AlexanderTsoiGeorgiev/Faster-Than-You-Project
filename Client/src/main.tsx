import React from 'react' 
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Layout from './components/Layout/Layout.tsx';
import NotFound from './components/Error/NotFound.tsx';

//pages
import Home from './pages/Home.tsx';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />, 
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: (
          <>
          <h1>Hello World</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis ducimus minima blanditiis corrupti cupiditate libero quae eveniet assumenda quibusdam accusamus placeat, ratione fugiat sed ab repellat officiis amet ex. Ab.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur, dolorum voluptatum necessitatibus praesentium id velit doloremque unde, esse repudiandae quae itaque totam cumque quam. Ipsam debitis alias corporis maiores at laborum autem dolores minus, reprehenderit, vitae placeat ut, necessitatibus impedit eos voluptates magnam. Qui eaque, illum quisquam ad voluptatum adipisci, quae omnis velit saepe mollitia, a laudantium quod! Quidem ut ullam, totam dolores consectetur alias, omnis quo aut velit quam sapiente eum rem in voluptatem tempora! Nam quo nihil, rem sunt a porro explicabo deserunt, voluptates sequi ipsa, reiciendis blanditiis. Enim et nihil, fuga molestias officiis molestiae! Corporis, beatae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur, dolorum voluptatum necessitatibus praesentium id velit doloremque unde, esse repudiandae quae itaque totam cumque quam. Ipsam debitis alias corporis maiores at laborum autem dolores minus, reprehenderit, vitae placeat ut, necessitatibus impedit eos voluptates magnam. Qui eaque, illum quisquam ad voluptatum adipisci, quae omnis velit saepe mollitia, a laudantium quod! Quidem ut ullam, totam dolores consectetur alias, omnis quo aut velit quam sapiente eum rem in voluptatem tempora! Nam quo nihil, rem sunt a porro explicabo deserunt, voluptates sequi ipsa, reiciendis blanditiis. Enim et nihil, fuga molestias officiis molestiae! Corporis, beatae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur, dolorum voluptatum necessitatibus praesentium id velit doloremque unde, esse repudiandae quae itaque totam cumque quam. Ipsam debitis alias corporis maiores at laborum autem dolores minus, reprehenderit, vitae placeat ut, necessitatibus impedit eos voluptates magnam. Qui eaque, illum quisquam ad voluptatum adipisci, quae omnis velit saepe mollitia, a laudantium quod! Quidem ut ullam, totam dolores consectetur alias, omnis quo aut velit quam sapiente eum rem in voluptatem tempora! Nam quo nihil, rem sunt a porro explicabo deserunt, voluptates sequi ipsa, reiciendis blanditiis. Enim et nihil, fuga molestias officiis molestiae! Corporis, beatae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur, dolorum voluptatum necessitatibus praesentium id velit doloremque unde, esse repudiandae quae itaque totam cumque quam. Ipsam debitis alias corporis maiores at laborum autem dolores minus, reprehenderit, vitae placeat ut, necessitatibus impedit eos voluptates magnam. Qui eaque, illum quisquam ad voluptatum adipisci, quae omnis velit saepe mollitia, a laudantium quod! Quidem ut ullam, totam dolores consectetur alias, omnis quo aut velit quam sapiente eum rem in voluptatem tempora! Nam quo nihil, rem sunt a porro explicabo deserunt, voluptates sequi ipsa, reiciendis blanditiis. Enim et nihil, fuga molestias officiis molestiae! Corporis, beatae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur, dolorum voluptatum necessitatibus praesentium id velit doloremque unde, esse repudiandae quae itaque totam cumque quam. Ipsam debitis alias corporis maiores at laborum autem dolores minus, reprehenderit, vitae placeat ut, necessitatibus impedit eos voluptates magnam. Qui eaque, illum quisquam ad voluptatum adipisci, quae omnis velit saepe mollitia, a laudantium quod! Quidem ut ullam, totam dolores consectetur alias, omnis quo aut velit quam sapiente eum rem in voluptatem tempora! Nam quo nihil, rem sunt a porro explicabo deserunt, voluptates sequi ipsa, reiciendis blanditiis. Enim et nihil, fuga molestias officiis molestiae! Corporis, beatae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur, dolorum voluptatum necessitatibus praesentium id velit doloremque unde, esse repudiandae quae itaque totam cumque quam. Ipsam debitis alias corporis maiores at laborum autem dolores minus, reprehenderit, vitae placeat ut, necessitatibus impedit eos voluptates magnam. Qui eaque, illum quisquam ad voluptatum adipisci, quae omnis velit saepe mollitia, a laudantium quod! Quidem ut ullam, totam dolores consectetur alias, omnis quo aut velit quam sapiente eum rem in voluptatem tempora! Nam quo nihil, rem sunt a porro explicabo deserunt, voluptates sequi ipsa, reiciendis blanditiis. Enim et nihil, fuga molestias officiis molestiae! Corporis, beatae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur, dolorum voluptatum necessitatibus praesentium id velit doloremque unde, esse repudiandae quae itaque totam cumque quam. Ipsam debitis alias corporis maiores at laborum autem dolores minus, reprehenderit, vitae placeat ut, necessitatibus impedit eos voluptates magnam. Qui eaque, illum quisquam ad voluptatum adipisci, quae omnis velit saepe mollitia, a laudantium quod! Quidem ut ullam, totam dolores consectetur alias, omnis quo aut velit quam sapiente eum rem in voluptatem tempora! Nam quo nihil, rem sunt a porro explicabo deserunt, voluptates sequi ipsa, reiciendis blanditiis. Enim et nihil, fuga molestias officiis molestiae! Corporis, beatae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur, dolorum voluptatum necessitatibus praesentium id velit doloremque unde, esse repudiandae quae itaque totam cumque quam. Ipsam debitis alias corporis maiores at laborum autem dolores minus, reprehenderit, vitae placeat ut, necessitatibus impedit eos voluptates magnam. Qui eaque, illum quisquam ad voluptatum adipisci, quae omnis velit saepe mollitia, a laudantium quod! Quidem ut ullam, totam dolores consectetur alias, omnis quo aut velit quam sapiente eum rem in voluptatem tempora! Nam quo nihil, rem sunt a porro explicabo deserunt, voluptates sequi ipsa, reiciendis blanditiis. Enim et nihil, fuga molestias officiis molestiae! Corporis, beatae.</p>
          </>
        )
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "about",
        element: <h1>About </h1>
      }
    ]
  },
  {
    
  }
]);

//Fugaz One -- nice font

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
