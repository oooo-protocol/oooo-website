# oooo website
oooo is the first modular bitcoin and L2 liquidity cross-rollup bridge protocol.

## Usage

### Development
```bash
pnpm dev
```

### Production
```bash
# compile and minify for test environment
pnpm build
# compile and minify for prod environment
pnpm build:prod
# analyze the production package
pnpm build:analyze
```

## Folder Structure
| Name         | Description                                           |
| ------------ | ----------------------------------------------------- |
| public       | Store files that need to be packaged into dist folder |
| src          | -                                                     |
| ᴸassets      | Store resouces, such as: images, SVG, etc             |
| ᴸcomponents  | Store reusable components                             |
| ᴸcomposables | Store reusable functions, such as hooks               |
| ᴸentities    | Store entity definition                               |
| ᴸlib         | Store tool and 3rd functions                          |
| ᴸpages       | Store project pages                                   |
| ᴸrequest     | Store requset related functions                       |
| ᴸrouter      | Store project router                                  |
| ᴸshims       | Implement missing type definitions                    |
