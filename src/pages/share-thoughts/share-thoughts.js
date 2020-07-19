import React from 'react';
import styles from './share-thoughts.module.css'
import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import SubmitButton from '../../components/button/submit-button'
import Origamis from '../../components/origamis'

const ShareThoughtsPage = (props) => {
    return (
        <PageWrapper>
            <Title title={"Share your thoughts..."} />
            <div className={styles.container}>
                <div>
                    <textarea className={styles.textarea}></textarea>
                </div>
                <div>
                    <SubmitButton title={"Post"} />
                </div>
            </div>
            <Origamis length={3} />
        </PageWrapper>
    )
}
export default ShareThoughtsPage