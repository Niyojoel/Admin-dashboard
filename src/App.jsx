import {Routes, Route} from 'react-router-dom';
import {ColorModeContext, useMode} from './theme';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {Topbar, Sidebar} from './scenes/layout'
import {
  Bar,
  Contacts,
  Dashboard,
  FAQ,
  Form,
  Geography,
  Invoices,
  Line,
  Pie,
  Team,
  Calendar
} from './scenes'
import { useState } from 'react';



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar/>
            <section className='main'>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/team' element={<Team />} />
              <Route path='/invoices' element={<Invoices />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/form' element={<Form />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/line' element={<Line />} />
              <Route path='/geography' element={<Geography/>} />
              <Route path='/calendar' element={<Calendar/>} />
            </Routes>
            </section>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
