import React from "react";

export default function WorkshopModal() {
      return (
            <div className="modal" tabindex="-1">
                  <div className="modal-dialog">
                        <div className="modal-content">
                              <div className="modal-header">
                                    <h5 className="modal-title">Success!</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                    <p>Newsletter successfully deleted.</p>
                              </div>
                        </div>
                  </div>
            </div>
      )
};