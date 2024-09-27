interface Logo {
  id: string;
}

/**
 * Custom logo for testing purposes.
 * @param id
 */
function Logo({ id }: Logo) {
  return (
    <div id={id} className="site-logo">
      <a href="/public">Vanessa Coles</a>
    </div>
  );
}

export default Logo;
