import ReactMarkdown from "react-markdown";

export default function RecipeAI(props) {
  return (
    <section className="ai-recipe-container" aria-live="polite">
      <h2>Chef Claude Recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}
