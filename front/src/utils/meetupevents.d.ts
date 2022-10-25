type IEventResponse = {
    node: {
      dateTime: Date,
      eventUrl: URL,
      title: string,
      id: string
    }
  }

export = IEventResponse