import Suggestions from "../../components/suggestions/Suggestions";
import { getSuggestions } from "../../utils/getSuggestions";

export default function SuggestionSection() {
  const products = getSuggestions();
  
  return <Suggestions products={products} />;
}
