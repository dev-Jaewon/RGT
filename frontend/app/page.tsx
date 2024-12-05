import { Layout } from "@/src/ui/common/Layout";
import { Tab } from "@/src/ui/common/Tab";
import { ContentView } from "@/src/ui/main/ContentView";
export default function Home() {
  return (
    <Layout>
      <ContentView />
      <Tab />
    </Layout>
  );
}
