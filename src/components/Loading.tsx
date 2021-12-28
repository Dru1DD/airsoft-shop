import React, { FC } from 'react'
import '../styles/pages/LoadingPage.css'

export const Loading: FC = () => {
    return (
        <div className='lp-container'>
            <div className="lp-loader">
                <div className="lp-loader-shap" />
                <div className="lp-loader-shap" />
                <div className="lp-loader-shap" />
            </div>
        </div>
    )
}