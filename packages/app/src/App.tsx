import './App.css'
import { LibComponent } from '@react5/lib'
import '@react5/lib/dist/index.css'
import { useTranslation } from 'react-i18next'
import { translationNs } from './i18n/ns'

function App() {
  const { t } = useTranslation(translationNs)
  return (
    <>
      <h1>{t('app.title')}</h1>
      <LibComponent/>
    </>
  )
}
export default App
