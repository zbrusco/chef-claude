import chefClaude from "../static/chef-claude-icon.svg";

export default function Header() {
  return (
    <header>
      <img className="logo" src={chefClaude} alt="Chef Claude logo" />
      <span>Chef Gemini</span>
    </header>
  );
}
