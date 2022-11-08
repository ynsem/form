export const validateEmail = (e: string): boolean => {
  const validRe =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return validRe.test(e)
}

// simple password validation
export const validatePassword = (p: string): boolean => p.length > 4