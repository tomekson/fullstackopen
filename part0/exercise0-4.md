sequenceDiagram
participant browser
participant server

    Note right of browser: User is on https://studies.cs.helsinki.fi/exampleapp/notes
    Note right of browser: User writes a note and clicks Save button

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Note left of server: Server processes the new note
