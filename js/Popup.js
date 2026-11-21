/**
 * Adds a dialog element to the document body
 * Example usage:
 * new Popup({
        title: "Test",
        message: "testmessagfe",
        buttons: [
            {label: "okay"},
            {label: "next", onClick: () => location.href = PATH.survey[2]}
        ]
    });
 */
class Popup {
    static zCounter = 1000;
    constructor({ title = "Notice", message = "", buttons = []}) {
        this.popup = document.createElement("dialog");
        this.popup.className = "popup";
        
        //Header
        this.header = document.createElement("div");
        this.header.className = "popup-header";

        const titleElement = document.createElement("div");
        titleElement.textContent = title;

        const closeBtn = document.createElement("button");
        closeBtn.type = "button";
        closeBtn.textContent = "✖";
        closeBtn.addEventListener("click", () => this.close());

        this.header.append(titleElement,closeBtn);

        //Body
        this.body = document.createElement("div");
        this.body.className = "popup-body";
        this.body.textContent = message;

        //Footer
        this.footer = document.createElement("div");
        this.footer.className = "popup-footer"
        for (const {label, onClick} of buttons) {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.textContent = label;
            btn.addEventListener("click", () => {
                if (onClick) onClick();
                this.close();
            });
            this.footer.appendChild(btn);
        }

        //append all to popup
        this.popup.append(this.header,this.body,this.footer);
        this.makeDraggable();
        this.show();
    }

    /**
     * appends popup to page
     */
    show() {
        document.body.appendChild(this.popup);
        this.popup.style.zIndex = ++Popup.zCounter;
        this.popup.show();
        return this;
    }

    close() {
        this.popup.close();
        this.popup.remove(); //remove from DOM
    }

    /**
     * copied code
     */
    makeDraggable() {
        let offsetX = 0, offsetY = 0;

        const drag = e => {
            this.popup.style.left = e.clientX - offsetX + "px";
            this.popup.style.top = e.clientY - offsetY + "px";
        };

        this.header.addEventListener("pointerdown", e => {
            if (e.target.closest("button")) return;
            const rect = this.popup.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
            Object.assign(this.popup.style, {
                position: "fixed", margin: "0",
                left: rect.left + "px", top: rect.top + "px"
            });
            this.header.setPointerCapture(e.pointerId);
            this.header.addEventListener("pointermove", drag);
        });

        this.header.addEventListener("pointerup", () => {
            this.header.removeEventListener("pointermove", drag);
        });
    }
}