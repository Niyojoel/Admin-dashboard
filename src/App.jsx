import {Routes, Route} from 'react-router-dom';
import { useEffect, useRef} from 'react';
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
import { useScreenSizeContext } from './context/useScreenSizeContext';

function App() {

  const [theme, colorMode] = useMode();
  const {observeContainerSize} = useScreenSizeContext();

  const containerRef = useRef(null);

  useEffect(() => {
    observeContainerSize(containerRef);
  },[containerRef])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <Sidebar/>
          <main className="content">
            <Topbar/>
            <section className='main' ref={containerRef}>
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
              <Route path='/calendar' element={<Calendar />} />
            </Routes>
            </section>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
