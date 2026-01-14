import { useAppStore } from "../store/appStore";

function Navbar() {
  const { user, theme, logout, toggleTheme } = useAppStore((state: any) => ({
    user: state.user,
    theme: state.theme,
    logout: state.logout,
    toggleTheme: state.toggleTheme,
  }));

  return (
    <nav>
      <span>Theme:{theme}</span>
      <button onClick={toggleTheme}>ToggleTheme</button>
      {user ? (
        <>
          <span>Hi,{user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <span>Guest</span>
      )}
    </nav>
  );
}
export default Navbar;
