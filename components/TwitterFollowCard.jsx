export function TwitterFollowCard ({children, userName, isFollowing}) {
const imageSrc = `https://unavatar.io/instagram/${userName}`
    return(
        <article className='tw-followCard'> 
      <header className='tw-followCard-header'>
        <img 
        className='tw-followCard-avatar'
        alt='valorant avatar'
        src= {imageSrc}
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span 
          className='tw-followCard-infoUserName'>
            @{userName}
          </span>
        </div>
      </header>
      <aside>
        <button className='tw-followCard-button'>
          Seguir
        </button>
      </aside>
    </article>
    )
}