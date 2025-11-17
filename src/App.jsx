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

const content = {
  height: "72vh",
  spacing: "10px"
};


function App() {
  const [theme, colorMode] = useMode();

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
              <Route path='/' element={<Dashboard  contentStyles={content}/>} />
              <Route path='/contacts' element={<Contacts  contentStyles={content}/>} />
              <Route path='/faq' element={<FAQ  contentStyles={content}/>} />
              <Route path='/team' element={<Team  contentStyles={content}/>} />
              <Route path='/invoices' element={<Invoices  contentStyles={content}/>} />
              <Route path='/pie' element={<Pie  contentStyles={content}/>} />
              <Route path='/form' element={<Form  contentStyles={content}/>} />
              <Route path='/bar' element={<Bar  contentStyles={content}/>} />
              <Route path='/line' element={<Line  contentStyles={content}/>} />
              <Route path='/geography' element={<Geography contentStyles={content}/>} />
              <Route path='/calendar' element={<Calendar contentStyles={content}/>} />
            </Routes>
            </section>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
