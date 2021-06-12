import { FaGithub } from 'react-icons/fa'
import styles from './styles.module.scss';
import { FiX } from 'react-icons/fi'
import React from 'react';

export function SignInButton() {
    const isUserLoggedIn = true;


    return isUserLoggedIn ? (
        <button
            type="button"
            className={styles.signInButton}
        >
            <FaGithub color="#04de01" />
            Hugo Alves Varella
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button
            type="button"
            className={styles.signInButton}
        >
            <FaGithub color="#eba417" />
            Sign in with GitHub
        </button>
    )
}