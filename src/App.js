import { ThemeProvider } from 'styled-components';
import Card from './Components/Card';
import Footer from './Components/Footer';
import Header from './Components/Header'
import { Container } from "./Components/styles/Container.styled";
import GlobalStyles from './Components/styles/Global';
import content from './content'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  }

}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {
            content.map((item, index) => {
              return <Card key={index} item={item} />
            })
          }
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App;
