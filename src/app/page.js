import styles from "./page.module.css";
import { Feed } from './components/Feed/Feed';

export default function Home() {
  return (
    <main className={styles.main}>
      My frontend!

      <div>
        <Feed />
      </div>
    </main>
  );
}
