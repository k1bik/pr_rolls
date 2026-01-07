class FeedbackRequestMailer < ApplicationMailer
  def send_notification(feedback_request)
    @name = feedback_request.name
    @phone = feedback_request.phone
    @email = feedback_request.email
    @comment = feedback_request.comment

    mail to: "example@example.com", subject: "Новая заявка с лендинга"
  end
end
