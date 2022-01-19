import React from "react";

export default function Modal({ children, modalTitle, onSubmit, modalId, modalSize }) {

    return (
        
        <div className="modal fade" id={modalId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className={modalSize} role="document">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{modalTitle}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <i aria-hidden="true" className="ki ki-clo se"/>
                        </button>
                    </div>

                    <form className="form fv-plugins-bootstrap fv-plugins-framework" onSubmit={onSubmit}>
                        {children}
                    </form>

                </div>
            </div>
        </div>

    )
}
