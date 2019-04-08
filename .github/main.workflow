workflow "Build, TestComponent" {
  on = "push"
  resolves = ["TestForms"]
}

action "Install" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "Build" {
  needs = "Install"
  uses = "nuxt/actions-yarn@master"
  args = "build"
}

action "TestComponent" {
  needs = "Build"
  uses = "nuxt/actions-yarn@master"
  args = "test:components-ci"
}

action "TestForms" {
  needs = "TestComponent"
  uses = "nuxt/actions-yarn@master"
  args = "test:forms-ci"
}

