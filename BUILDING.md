## Requirements

- [Bun](https://bun.sh/)

## Building

1. Clone this repository from [GitHub](https://github.com/Astralopedia/Astralopedia)

```shell
git clone https://github.com/Astralopedia/Astralopedia
```

2. Download dependencies

```bash
cd Astralopedia
bun install
```

3. Build

If you want to build and serve it locally, run:

```bash
bun start
```

It'll start a server at `https://localhost:3000`.

For production, run:

```bash
bun run build
```

> After the command is executed successfully, there will be a `/build` directory
> which contains all you need for deploying

4. Serve it

```bash
bun serve
```
