import React, {FC, useState} from 'react';
import css from '../Profile.module.css'
import Projects from './Projects/Projects';
import Collections from './Collections/Collections';
import Followers from './Followers/Followers';
import Following from './Following/Following';
import Change from './Change/Change';
import {ProfileType} from '../../../../types/types';

type PropsType = {
    profile: ProfileType
    isOwner: boolean
    saveProfile: (profile: ProfileType) => void
}

let ProfileContainer: FC<PropsType> = ({profile, isOwner, saveProfile}) => {
    let [choiceMode, setChoiceMode] = useState('Projects')

    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData)
    }

    return (
        <div className={css.posts}>
            <div className={css.nav}>
                <ControlBtn choiceMode={choiceMode} setChoiceMode={setChoiceMode} chosen={'Projects'}/>
                <ControlBtn choiceMode={choiceMode} setChoiceMode={setChoiceMode} chosen={'Collections'}/>
                <ControlBtn choiceMode={choiceMode} setChoiceMode={setChoiceMode} chosen={'Followers'}/>
                <ControlBtn choiceMode={choiceMode} setChoiceMode={setChoiceMode} chosen={'Following'}/>
                {isOwner && <ControlBtn choiceMode={choiceMode} setChoiceMode={setChoiceMode} chosen={'Change'}/>}
            </div>
            <div className={css.content}>
                {choiceMode === 'Projects' && <Projects/>}
                {choiceMode === 'Collections' && <Collections/>}
                {choiceMode === 'Followers' && <Followers/>}
                {choiceMode === 'Following' && <Following/>}
                {choiceMode === 'Change' && <Change initialValues={profile} profile={profile} onSubmit={onSubmit}/>}
            </div>
        </div>
    )
}

type ButtonPropsType = {
    choiceMode: string
    setChoiceMode: (chosen: string) => void
    chosen: string
}

let ControlBtn: FC<ButtonPropsType> = ({choiceMode, setChoiceMode, chosen}) => {
    return (
        // todo fix this!!!
        // @ts-ignore
        <button className={choiceMode === chosen && css.selectedMode}
                onClick={() => setChoiceMode(chosen)}>{chosen}</button>
    )
}

export default ProfileContainer