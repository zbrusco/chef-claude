import chefClaude from "../static/chef-claude-icon.png";

export default function Header() {
  return (
    <header>
      <img src={chefClaude} alt="Chef Claude logo" />
      <span>Chef Gemini</span>
    </header>
  );
}
