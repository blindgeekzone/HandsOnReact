export default ({cast, onChoice)} => {
return (
    <nav className={"container">
    <ul>
        <li>
            <details roll="list">
                <summary aria-haspopup="listbox" roll="link">cast
                </summary>
                <ul roll="listbox">
                {cast.map(member => (
                <li key={member.id}>
                  <a onClick={() => { onChoice(member) }}
                    data-tooltip={member.name}>{member.name}</a>
                </li>
                ))}
                              </ul>
                              <ul>
        <li><a href="#"><img style={{ height: '50px' }} src="images/logo_bug_stargazers.svg" alt="Stargazers Logo" /></a></li>
      </ul>
    </nav>
  )
}


            <