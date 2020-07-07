require 'test_helper'

class NewUserMailerTest < ActionMailer::TestCase
  test "signup_confirmation" do
    mail = NewUserMailer.signup_confirmation
    assert_equal "Signup confirmation", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

  test "invite_friend" do
    mail = NewUserMailer.invite_friend
    assert_equal "Invite friend", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
