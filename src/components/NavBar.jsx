import React from 'react'
import Button from '@mui/material/Button';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { useNavigateStore } from '../stores/navegation.store';

const NavBar = () => {

    const page = useNavigateStore(state=> state.page)
    const setPage = useNavigateStore(state=> state.setPage)

    const handleChange = (event, newValue) => {
      setPage(newValue);
    };
  return (
<BottomNavigation value={page} onChange={handleChange} className='rounded-md' showLabels>
      <BottomNavigationAction
        label="Info"
        value="info"
        icon={<InfoIcon />}
      />
      <BottomNavigationAction
        label="Educación"
        value="education"
        icon={<SchoolIcon />}
      />
      <BottomNavigationAction
        label="Trabajos"
        value="trabajo"
        icon={<WorkHistoryIcon />}
      />
      <BottomNavigationAction 
      label="Habilidades" 
      value="habilidades" 
      icon={<PersonSearchIcon />} 
      />
      <BottomNavigationAction 
      label="Otros" 
      value="otros" 
      icon={<NoteAddIcon />} 
      />
    </BottomNavigation>
  )
}

export default NavBar