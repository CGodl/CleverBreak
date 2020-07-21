# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  name            :string
#  email           :string           not null
#
class User < ApplicationRecord
  attr_reader :password

  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :name, presence: true
  validates :password, length: { minimum: 8 }, allow_nil: true

  after_initialize :ensure_session_token

  has_many :sent_friend_requests,
    foreign_key: :requested_id,
    class_name: :Friend

  has_many :received_friend_requests,
    foreign_key: :requestor_id,
    class_name: :Friend

  has_many :friendors, #Array of Ids #requested me as a friend
    through: :sent_friend_requests,
    source: :requestor

  has_many :friendees, #People I requested as friends
    through: :received_friend_requests,
    source: :requested


    
  has_many :sent_bill_requests,
    foreign_key: :author_id,
    class_name: :Bill
  
  has_many :received_bill_requests,
    foreign_key: :recipient_id,
    class_name: :Bill

  has_many :billers,
    through: :received_bill_requests,
    source: :author
    
    has_many :billees,
      through: :sent_bill_requests,
      source: :recipients


  def friends #ensures uniqueness by combining friendor and friendee
    friendors + friendees #concat two arrays
  end

  def bills
    sent_bill_requests + received_bill_requests
  end

  def bill_names
    billers + billees
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
