import { render, screen } from '@testing-library/vue'

import MainNav from '@/components/MainNav.vue'

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav) // we can send an object as second argument here for changing the config
    const companyName = screen.getByText('Bobo Careers')
    expect(companyName).toBeInTheDocument()
  })
})
