class FeedbackRequest < ApplicationRecord
  MAX_STRING_LENGTH = 500
  MAX_PHONE_LENGTH = 20

  validates :name, presence: { message: "Имя обязательно для заполнения" },
                   length: { maximum: MAX_STRING_LENGTH, message: "Имя слишком длинное (максимум %{count} символов)" }
  validates :phone, presence: { message: "Номер телефона обязателен для заполнения" },
                    length: { maximum: MAX_PHONE_LENGTH, message: "Номер телефона слишком длинный (максимум %{count} символов)" }
  validates :email, presence: { message: "E-mail обязателен для заполнения" },
                    length: { maximum: MAX_STRING_LENGTH, message: "E-mail слишком длинный (максимум %{count} символов)" }
  validates :consent, inclusion: { in: [true], message: "Необходимо дать согласие" }
  validates :comment, length: { maximum: MAX_STRING_LENGTH, message: "Комментарий слишком длинный (максимум %{count} символов)" }
end
