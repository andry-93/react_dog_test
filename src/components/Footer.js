import React from "react";

export default function Footer() {
    return (
        <footer className="text-muted">
            <div className="container-fluid">
                <p className="float-right">
                    <a id="scroll-up" href="#" onClick={(event)=>{
                        event = event || window.event;
                        if (event.preventDefault) {
                            event.preventDefault();
                        } else {
                            event.returnValue = false;
                        }
                        document.body.scrollTop = document.documentElement.scrollTop = 0;
                    }}>Back to top</a>
                </p>
                <p>&copy; A. V. Zayats, 2018</p>
            </div>
        </footer>
    );
}
