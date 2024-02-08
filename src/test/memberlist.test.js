// Import the component and the Vue testing library
import { mount } from '@vue/test-utils'
import MemberList from '../view/member/MemberList.vue'

// Describe block for the MemberList component
describe('MemberList', () => {
  it('renders correctly', () => {
    // Mount the component
    const wrapper = mount(MemberList)

    // Assert that the component renders correctly
    expect(wrapper.exists()).toBe(true)
  })

  it('displays member data correctly', async () => {
    // Define mock member data
    const members = [
      { id: 1, firstname: 'John', lastname: 'Doe', gender: 'Male', address: '123 Main St' },
      { id: 2, firstname: 'Jane', lastname: 'Smith', gender: 'Female', address: '456 Elm St' }
    ]

    // Mount the component with mock data
    const wrapper = mount(MemberList, {
      data() {
        return {
          memberStore: {
            member: members,
            loadMembers: jest.fn() // Mock the loadMembers function
          }
        }
      }
    })

    // Wait for the component to finish rendering
    await wrapper.vm.$nextTick()

    // Find the rendered member rows
    const renderedRows = wrapper.findAll('tbody tr')

    // Assert that the correct number of rows are rendered
    expect(renderedRows.length).toBe(members.length)

    // Assert that member data is displayed correctly in each row
    renderedRows.forEach((row, index) => {
      const member = members[index]
      expect(row.text()).toContain(member.firstname)
      expect(row.text()).toContain(member.lastname)
      expect(row.text()).toContain(member.gender)
      expect(row.text()).toContain(member.address)
    })
  })

  // Test other functionalities as needed...
})
