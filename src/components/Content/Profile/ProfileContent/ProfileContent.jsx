import React, {useState} from "react";
import css from '../Profile.module.css'
import Projects from "./Projects/Projects";
import Collections from "./Collections/Collections";
import Followers from "./Followers/Followers";
import Following from "./Following/Following";
import Change from "./Change/Change";

let ProfileContainer = ({isOwner}) => {
    let [choiceMode, setChoiсeMode] = useState('Change')

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className={css.posts}>
            <div className={css.nav}>
                <ControlBtn choiceMode={choiceMode} setChoiсeMode={setChoiсeMode} chosen={'Projects'}/>
                <ControlBtn choiceMode={choiceMode} setChoiсeMode={setChoiсeMode} chosen={'Collections'}/>
                <ControlBtn choiceMode={choiceMode} setChoiсeMode={setChoiсeMode} chosen={'Followers'}/>
                <ControlBtn choiceMode={choiceMode} setChoiсeMode={setChoiсeMode} chosen={'Following'}/>
                {isOwner && <ControlBtn choiceMode={choiceMode} setChoiсeMode={setChoiсeMode} chosen={'Change'}/>}
            </div>
            <div className={css.content}>
                {choiceMode === 'Projects' && <Projects />}
                {choiceMode === 'Collections' && <Collections />}
                {choiceMode === 'Followers' && <Followers />}
                {choiceMode === 'Following' && <Following />}
                {choiceMode === 'Change' && <Change onSubmit = {onSubmit}/>}
            </div>
        </div>
    )
}

let ControlBtn = ({choiceMode,setChoiсeMode, chosen}) => {
    return (
        <button className={choiceMode === chosen && css.selectedMode} onClick={ () => setChoiсeMode(chosen)}>{chosen}</button>
    )
}

export default ProfileContainer