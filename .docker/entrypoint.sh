#!/bin/bash
if [ ! -f ".env" ]; then
    cp .env.example .env
fi

yarn install

tail -f /dev/null