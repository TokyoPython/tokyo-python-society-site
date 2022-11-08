type IEventResponse = {
  node: {
    dateTime: Date | string,
    eventUrl: URL | string,
    title: string,
    id: string
  }
}

export = IEventResponse