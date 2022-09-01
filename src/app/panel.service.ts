import { Tile } from "./tiles/tile.model";

export class PanelService {
    panels = [
        new Tile(
            'MY WORK', "../../assets/icons/gear.png", 1, true
        ),
        new Tile(
            'EXPERIENCE', "../../assets/icons/experience.png", 2, false
        ),
        new Tile(
            'PERSONAL',
            "../../assets/icons/user.png",
            3,
            false
        ),
        new Tile(
            'CONTACT',
            "../../assets/icons/contact.png",
            4,
            false
        )
    ];

    setActivePanel(panelNumber: number) {
        this.clearActivePanels();
        this.panels[panelNumber - 1].activePanel = true;
    }

    clearActivePanels() {
        this.panels.forEach(element => {
            element.activePanel = false;
        });
    }
}