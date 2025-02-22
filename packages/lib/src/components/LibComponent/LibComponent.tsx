import { useTranslation } from "react-i18next";
import { translationNs } from "../../i18n/ns";
import { bem } from "../../utils/bem";

const b = bem("lib-component");
export const LibComponent = () => {
  const { t, i18n } = useTranslation(translationNs);

  return (
    <div className={b()}>
      <h1 className={b("title")}>Hello from Lib</h1>
      <p className={b("description")}>This is a component from the lib package</p>
      <p><a className={b("link")} href="/">Get Started</a></p>
      <p><a className={b("link")} href="/">{t("core.settings")}</a></p>
    </div>
  )
}
