require "application_system_test_case"

class DonationsTest < ApplicationSystemTestCase
  setup do
    @donation = donations(:one)
  end

  test "visiting the index" do
    visit donations_url
    assert_selector "h1", text: "Donations"
  end

  test "creating a Donation" do
    visit donations_url
    click_on "New Donation"

    fill_in "Cidade", with: @donation.cidade
    fill_in "Data", with: @donation.data
    fill_in "Doador", with: @donation.doador
    fill_in "Estado", with: @donation.estado
    fill_in "Tipo", with: @donation.tipo
    click_on "Create Donation"

    assert_text "Donation was successfully created"
    click_on "Back"
  end

  test "updating a Donation" do
    visit donations_url
    click_on "Edit", match: :first

    fill_in "Cidade", with: @donation.cidade
    fill_in "Data", with: @donation.data
    fill_in "Doador", with: @donation.doador
    fill_in "Estado", with: @donation.estado
    fill_in "Tipo", with: @donation.tipo
    click_on "Update Donation"

    assert_text "Donation was successfully updated"
    click_on "Back"
  end

  test "destroying a Donation" do
    visit donations_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Donation was successfully destroyed"
  end
end
