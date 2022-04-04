import React from 'react';
import ProjectItem from '../components/ProjectItem';
import experienceImg from '../assets/images/experience.jpg';
const projects = [
  {
    id: 1,
    image: experienceImg,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempora nostrum neque officia recusandae et id blanditiis nemo. Qui nesciunt ex saepe optio consequuntur, cupiditate vero voluptatem possimus aliquid totam.',
    link: 'url',
    download: 'url',
  },
  {
    id: 2,
    image: experienceImg,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempora nostrum neque officia recusandae et id blanditiis nemo. Qui nesciunt ex saepe optio consequuntur, cupiditate vero voluptatem possimus aliquid totam.',
    link: 'url',
    download: 'url',
  },
  {
    id: 3,
    image: experienceImg,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempora nostrum neque officia recusandae et id blanditiis nemo. Qui nesciunt ex saepe optio consequuntur, cupiditate vero voluptatem possimus aliquid totam.',
    link: 'url',
    download: 'url',
  },
  {
    id: 4,
    image: experienceImg,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempora nostrum neque officia recusandae et id blanditiis nemo. Qui nesciunt ex saepe optio consequuntur, cupiditate vero voluptatem possimus aliquid totam.',
    link: 'url',
    download: 'url',
  },
  {
    id: 5,
    image: experienceImg,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempora nostrum neque officia recusandae et id blanditiis nemo. Qui nesciunt ex saepe optio consequuntur, cupiditate vero voluptatem possimus aliquid totam.',
    link: 'url',
    download: 'url',
  },
  {
    id: 6,
    image: experienceImg,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempora nostrum neque officia recusandae et id blanditiis nemo. Qui nesciunt ex saepe optio consequuntur, cupiditate vero voluptatem possimus aliquid totam.',
    link: 'url',
    download: 'url',
  },
  {
    id: 7,
    image: experienceImg,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempora nostrum neque officia recusandae et id blanditiis nemo. Qui nesciunt ex saepe optio consequuntur, cupiditate vero voluptatem possimus aliquid totam.',
    link: 'url',
    download: 'url',
  },
  {
    id: 8,
    image: experienceImg,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempora nostrum neque officia recusandae et id blanditiis nemo. Qui nesciunt ex saepe optio consequuntur, cupiditate vero voluptatem possimus aliquid totam.',
    link: 'url',
    download: 'url',
  },
];

const ProjectsPage = () => {
  const renderedProjectItem = projects.map((item) => (
    <ProjectItem project={item} key={item.id} />
  ));
  return <div className="container projects">{renderedProjectItem}</div>;
};

export default ProjectsPage;
