import Layout from './components/Layout'
import Form from './components/Form'

import styles from './App.module.scss'

function App() {
  return (
    <div className="App">
      <h1 className={styles['visually-hidden']}>Login form application</h1>
      <Layout>
        <Form />
      </Layout>
    </div>
  );
}

export default App;
