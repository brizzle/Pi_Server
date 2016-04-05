# Node JS Server
Lightweight Node JS server.

## Getting Started

## Requirements

- Install Node

## Steps

1. Install node packages:

    ```bash
    $ npm install
    ```

2. Adding definitely typed ("d.ts") files:
    
    In Visual Studio Code, to add definitely typed files, the user will need to be a level above the "typings" folder. A "tsd.json" file will be created and "d.ts" files will be added to this. If the "typings" folder doesn't exist, it will be created as well as the "tsd.json" file.
    
    To add a "d.ts" file, in the termial, change directories until you are in the directory that you want to add the files.
    
    - Open terminal
    - Type `tsd install node jquery --save`

2. Creating documentation:

    ```bash
    gulp typescript
    ```
This will be produced in the "docs" folder.