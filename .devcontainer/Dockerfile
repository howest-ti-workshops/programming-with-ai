FROM mcr.microsoft.com/devcontainers/python:0-3.11

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
&& apt-get -y install --no-install-recommends vim \
&& apt-get clean && rm -rf /var/lib/apt/lists/*

USER vscode
RUN curl -fsSL https://deno.land/install.sh | sh && sudo ln -s /home/vscode/.deno/bin/deno /usr/local/bin/deno