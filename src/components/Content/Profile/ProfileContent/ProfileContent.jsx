import React, {useState} from "react";
import css from '../Profile.module.css'
import Projects from "./Projects/Projects";
import Collections from "./Collections/Collections";
import Followers from "./Followers/Followers";
import Following from "./Following/Following";
import Change from "./Change/Change";

let ProfileContainer = ({isOwner}) => {
    let [choiceMode, setChoiсeMode] = useState('Profects')

    return (
        <div className={css.posts}>
            <div className={css.nav}>
                <button className={css.link} onClick={ () => setChoiсeMode('Profects')}>Projects</button>
                <button className={css.link} onClick={ () => setChoiсeMode('Collections')}>Collections</button>
                <button className={css.link} onClick={ () => setChoiсeMode('Followers')}>Followers</button>
                <button className={css.link} onClick={ () => setChoiсeMode('Following')}>Following</button>
                {isOwner && <button className={css.link} onClick={ () => setChoiсeMode('Change')}>Change</button>}
            </div>
            <div className={css.content}>
                {choiceMode === 'Profects' && <Projects />}
                {choiceMode === 'Collections' && <Collections />}
                {choiceMode === 'Followers' && <Followers />}
                {choiceMode === 'Following' && <Following />}
                {choiceMode === 'Change' && <Change />}
            </div>
        </div>
    )

}

export default ProfileContainer