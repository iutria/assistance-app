import { Button, Tooltip } from '@nextui-org/react';
import './styles/nav-bar.css'
import { useNavigate } from 'react-router-dom';
import { URLS } from '../../routes/config/urls';

export const Navbar = () => {

  const navigate = useNavigate();

  const views = [ 
    {
      title: 'Inicio',
      to: URLS.HOME
    },
    {
      title: 'Estudiantes',
      to: URLS.STUDENTS
    },
    {
      title: 'Profesores',
      to: URLS.TEACHERS
    },
  ]

  return <nav className="nav-bar">
    
    {
      views.map(
        (item, index)=>{
          return <Button key={index} onPress={()=>navigate(item.to)} className='w-full rounded-none'>
          {item.title}
        </Button>
        }
      )
    }
    <Tooltip
      placement='right-end'
      className='p-0'
      content={<>
        <Button className='rounded-none' style={{ width: '200px' }}>
          Button
        </Button>
        <Button className='rounded-none' style={{ width: '200px' }}>
          Button
        </Button>
        <Button className='rounded-none' style={{ width: '200px' }}>
          Button
        </Button>
        <Button className='rounded-none' style={{ width: '200px' }}>
          Button
        </Button>
      </>}
    >
      <Button className='w-full rounded-none'>
        Ejemplo
      </Button>
    </Tooltip>
  </nav>;
};